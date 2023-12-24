import { Container } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';
import MainHeader from './components/MainHeader';
import NewEnteryForm from './components/NewEnteryForm';

function App() {
  return (
   <Container>
    <MainHeader title='Budget' />
    <DisplayBalance
      title='Your Balance'
      value='2,550.53'
      size='small'
    />
    <DisplayBalances />
    <MainHeader title='History' type='h3' />
    <EntryLine description='something' value='$100' isExpense />
    <EntryLine description='something' value='$10' isExpense />

    <MainHeader title='Add New Transaction' type='h3' />
    <NewEnteryForm />
   </Container>
  );
}

export default App;
