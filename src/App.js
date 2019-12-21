import React,{Component,PureComponent} from 'react';
import rqm from './RQManager';
import './App.css';
  
class Row extends Component {
  render () {
    const {item, style} = this.props;

    return (
      <tr style={style}>
        <td>{item.id}</td>
      </tr>
    )
  }
}
  
class Table extends PureComponent {
  render() {
    const {list} = this.props;
    const itemStyle = {
      color: 'red'
    }
    console.log(rqm);
    return (
      <table>
          {list.map(item => <Row key={item.id} item={item} style={itemStyle} />)}
      </table>
    )
  }
}
  
class App extends Component {
  state = {
    list: Array(10).fill(0).map((val, index) => ({id: index}))
  }
  
  handleClick = () => {
    this.setState({
      list: [...this.state.list, 1234567] // 增加一個元素
    })
  }
  
  render() {
    const {list} = this.state;
    return (
      <div>
        <button onClick={this.handleClick}>change state!</button>
        <Table list={list} />
      </div>
    );
  }
}

export default App;
