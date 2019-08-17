import React from 'react';
import api from './../../services/api';

class Main extends React.Component {

    state = {
        products: []
    };

    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/products');
        console.log(response)
        this.setState({ products: response.data.docs })
    }

    render(){
        return (
            <main>
                <h1>Contagem de pacientes: { this.state.products.length }</h1>
            </main>
        )
    }
}

export default Main;