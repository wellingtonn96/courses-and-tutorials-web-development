import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './index.css'
import React, { Component } from 'react'
import { HashRouter } from 'react-router-dom'
import { Switch, Route, Redirect } from 'react-router'
import axios from 'axios'
import logo from './assets/img/logo.png'


const Routes = props => 
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/users' component={UserCrud}/>
        <Redirect from='*' to='/'/>
    </Switch>

const Logo = () => 
    <aside className="logo">
        <a href="/" className="logo">
            <img src={logo} alt="logo"/>
        </a>
    </aside>

const Nav = () => 
    <aside className="menu-area">
        <nav className="menu">
            <a href="#/">
                <i className="fa fa-home"></i> Inicio
            </a>
            <a href="#/users">
                <i className="fa fa-users"></i> Usuários
            </a>
        </nav>
    </aside>

const Footer = () =>
    <footer className="footer">
        <span>
            Desenvolvido com <i className="fa fa-heart text-danger"></i> Por
                <strong>Cod<span className="text-danger">3</span>r</strong>
        </span>
    </footer>

const Home = () => 
    <Main  icon="home" title="inicio" 
        subtitle="Segundo Projeto do capítulo de React.">
        <div className="display-4">Bem vindo!</div>
        <hr/>
        <p className="mb-0">Sistema para exemplificar a contrução de um cadastro 
        desenvolvido em React!</p>
    </Main>

const Main = props => 
    <React.Fragment>
        <Header {...props}/>
        <main className="content container-fluid">
            <div className="p-3 mt-3">
                {props.children}
            </div>
        </main>
    </React.Fragment>

const Header = props =>
    <header className="header d-none d-sm-flex flex-column">
        <h1 className="mt-3">
            <i className={`fa fa-${props.icon}`}></i>{props.title}
        </h1>
        <p className="lead text-muded">{props.subtitle}</p>
    </header>

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir'
}


const baseUrl = 'http://localhost:3001/users'
const initialState = {
    user: {name: '', email:''},
    list: []
}

class UserCrud extends Component {
    
    state = {...initialState }

    componentWillMount(){
        axios(baseUrl).then(resp => {
            this.setState({list: resp.data})
        })
    }

    clear(){
        this.setState({ user: initialState.user})
    }

    save(){
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        axios[method](url, user)
        .then(resp => {
            const list = this.getUpdatedList(resp.data)
            this.setState({user:initialState.user, list})
        })
    }

    getUpdatedList(user, add=true){
        const list = this.state.list.filter(u => u.id !== user.id)
        if (add) list.unshift(user)
        return list
    }

    updateFild(event){
        const user = {...this.state.user}
        user[event.target.name] = event.target.value
        this.setState({ user })
    }


    renderForm(){
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control"
                            name="name" 
                            value={this.state.user.name} 
                            onChange={e => this.updateFild(e)}
                            placeholder="digite o seu nome..."required/>
                        </div>
                    </div>
                    
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" className="form-control" name="email"
                                value={this.state.user.email}
                                onChange={e => this.updateFild(e)}
                                placeholder="Digite o e-mail..."required/>
                        </div>
                    </div>
                </div>

                <hr/>

                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary" 
                            onClick={e => this.save(e)}>
                            salvar
                        </button>

                        <button className="btn btn-secondary ml-2"
                        onClick={e=> this.clear(e)}>
                            cancelar
                        </button>
                    </div>
                </div>
            </div>
         
        )
    }

    load(user){
        this.setState({ user })
    }

    remove(user){
        axios.delete(`${baseUrl}/${user.id}`).then(resp => {
            const list = this.getUpdatedList(user, false)
            this.setState({ list })
        })
    }

    renderTable(){
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <id>ID</id>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows(){
        return this.state.list.map(user=>{
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn btn-warning"
                            onClick={()=>this.load(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2"
                            onClick={()=>this.remove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <Main {...headerProps}>
               {this.renderForm()}
               {this.renderTable()}
            </Main>
        )
    }
}


export default props =>
    <HashRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </HashRouter>