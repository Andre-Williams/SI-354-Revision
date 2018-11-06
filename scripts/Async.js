import axios from 'axios'

const api = axios.create({
  baseURL: 'http://45.77.58.134:8080',
});

(async () => {
  const res = await api.get('/clients');
  const accounts = await api.get(`/accounts/${res.data[0]._id}`)
  const transactions = await api.get(`/transactions/${accounts.data[1]._id}/.*`)
  this.setState({clients: res.data, accounts: accounts.data, transactions: transactions.data });
})();

render() {
  return (
  <div>
    <ul>
    {this.state.clients.map(x =>
      <li key={x._id}>
        {`${x.first} ${x.last}`}
      </li>
    )}
  </ul>;
  <ul>
    {this.state.accounts.map(x =>
      <li key={x._id}>
        {`${x.description} ${x.balance}`}
      </li>
    )}
  </ul>;
  <ul>
    {this.state.transactions.map(x =>
      <li key={x._id}>
        {`${x.ref} ${x.amount} ${x.balance}`}
      </li>
    )}
  </ul>;
</div>

);
}
}
