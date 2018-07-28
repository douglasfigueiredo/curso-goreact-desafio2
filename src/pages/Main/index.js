import React, { Component } from 'react';

import api from '../../servicos/api';

import RepositorieList from '../../components/RepositoryList';

import { Form } from './styles';

export default class Main extends Component {
  state = {
    loading: false,
    repositoryInput: '',
    repositories: [],
    repositoryError: false,
  };

  handleAddRepository = async (e) => {
    const { repositoryInput, repositories } = this.state;
    e.preventDefault();

    this.setState({ loading: true });

    try {
      const { data: repository } = await api.get(`/repos/${repositoryInput}`);

      this.setState({
        repositoryInput: '',
        repositories: [...repositories, repository],

        repositoryError: false,
      });
    } catch (err) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const {
      repositories, repositoryInput, repositoryError, loading,
    } = this.state;
    return (
      <RepositorieList repositories={repositories}>
        <Form withError={repositoryError} onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="usuário/repositório"
            value={repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">
            {loading ? (
              <i className="fa fa-spinner fa-pulse" />
            ) : (
              <i className="fa fa-plus-circle" />
            )}
          </button>
        </Form>
      </RepositorieList>
    );
  }
}
