import React, { Component } from 'react';
import PropTypes from 'prop-types';

import api from '../../servicos/api';

import {
  Container, Content, Sidebar, Menu, Header, IssuesContainer,
} from './styles';

export default class RepositoryList extends Component {
  state = {
    loading: false,
    repositoryLogin: [],
    issues: [],
    issuesLogin: '',
    issuesName: '',
  };

  handleIssues = async (name, login) => {
    this.setState({ loading: true });
    try {
      const { data: repository } = await api.get(`/repos/${login}/${name}`);
      const { data: issue } = await api.get(`/repos/${login}/${name}/issues?state=all`);
      this.setState({
        repositoryLogin: [repository],
        issues: issue,
        issuesLogin: login,
        issuesName: name,
      });
    } finally {
      this.setState({ loading: false });
    }
  }

  handleChangeFilter = async (e) => {
    this.setState({ loading: true });

    const { issuesLogin, issuesName } = this.state;
    try {
      const { data: issue } = await api.get(`/repos/${issuesLogin}/${issuesName}/issues?state=${e.target.value}`);
      this.setState({
        issues: issue,
      });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { children, repositories } = this.props;
    const {
      repositoryLogin, issues, value, loading,
    } = this.state;
    return (
      <Container>
        <Sidebar>
          {children}
          <Menu>
            <ul>
              {repositories.map(repository => (
                <li key={repository.id}>
                  <button type="button" onClick={() => this.handleIssues(repository.name, repository.owner.login)}>
                    <img src={repository.owner.avatar_url} alt={repository.owner.login} />
                    <div className="content-text">
                      <strong>
                        {repository.name}
                      </strong>
                      <small>
                        {repository.owner.login}
                      </small>
                    </div>
                    {loading ? (
                      <i className="fa fa-spinner fa-pulse" />
                    ) : (
                      <i className="fa fa-angle-right" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </Menu>
        </Sidebar>
        <Content>
          <Header>
            {repositoryLogin.map(repositoryUser => (
              <div key={repositoryUser.id} className="content-header">
                <img src={repositoryUser.owner.avatar_url} alt={repositoryUser.owner.login} />
                <div className="content-text">
                  <strong>
                    {repositoryUser.name}
                  </strong>
                  <small>
                    {repositoryUser.owner.login}
                  </small>
                </div>
              </div>
            ))}
            <select onChange={this.handleChangeFilter} value={value}>
              <option value="all">
                Todas
              </option>
              <option value="open">
                Abertas
              </option>
              <option value="closed">
                Fechadas
              </option>
            </select>
          </Header>
          <IssuesContainer>
            <ul>
              {issues.map(issue => (
                <li key={issue.id}>
                  <img src={issue.user.avatar_url} alt="" className="redondo" />
                  <div className="contentText">
                    <strong>
                      {issue.title}
                    </strong>
                    <small>
                      {issue.user.login}
                      |
                      {issue.state}
                    </small>
                    <a href={issue.html_url} rel="noreferrer noopener" target="_blank">
                      <i className="fa fa-external-link" />
                      Abrir Issue
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </IssuesContainer>
        </Content>
      </Container>
    );
  }
}

RepositoryList.defaultProps = {
  children: '',
};

RepositoryList.propTypes = {
  children: PropTypes.string,
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      owner: PropTypes.shape({
        login: PropTypes.string,
        avatar_url: PropTypes.string,
      }),
      stargazers_count: PropTypes.number,
      forks_count: PropTypes.number,
      open_issues: PropTypes.number,
      pushed_at: PropTypes.string,
    }),
  ).isRequired,
};
