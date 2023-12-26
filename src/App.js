import { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import ModalEdit from './components/ModalEdit';


function App() {
  const [entries, setEntries] = useState(initialEntries)
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false)
  const [entryID, setEntryID] = useState('')
  const [incomeTotal, setIncomeTotal] = useState(0)
  const [expenseTotal, setExpenseTotal] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    if(!isOpen && entryID){
      const index = entries.findIndex((entry) => entry.id === entryID)
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);
      resetEntries();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  useEffect(() => {
    let totalIncomes = 0;
    let totalExpenses = 0;

    entries.map((entry) => {
      if(entry.isExpense) {
       return totalExpenses += Number(entry.value);
      }
      return totalIncomes += Number(entry.value);
    });

    setTotal(totalIncomes - totalExpenses);
    setIncomeTotal(totalIncomes);
    setExpenseTotal(totalExpenses);
  }, [entries])
  
  

  function deleteEntry(id){
    const result = entries.filter(entry => entry.id !== id);
    setEntries(result);
  }

  function editEntry(id) {
    console.log(`Edit entrty with ${id}`);
    if(id){
      const index = entries.findIndex((entry) => entry.id === id)
      const entry = entries[index];
      setEntryID(id);
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true);
    }
  }
  function addEntry(){
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpense,
    });
    setEntries(result);
  }

  function resetEntries(){
    setDescription('');
    setValue('');
    setIsExpense(true);
  }

  return (
   <Container>
    <MainHeader title='Budget' />
    <DisplayBalance
      title='Your Balance'
      value={total}
      size='small'
    />
    <DisplayBalances incomeTotal={incomeTotal} expenseTotal={expenseTotal} />
    <MainHeader title='History' type='h3' />
    <EntryLines entries={entries} deleteEntry={deleteEntry} editEntry={editEntry} />
    <MainHeader title='Add New Transaction' type='h3' />
    <NewEntryForm
      addEntry={addEntry}
      description={description}
      setDescription={setDescription}
      value={value}
      setValue={setValue}
      isExpense={isExpense}
      setIsExpense={setIsExpense}
    />
    <ModalEdit
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      description={description}
      setDescription={setDescription}
      value={value}
      setValue={setValue}
      isExpense={isExpense}
      setIsExpense={setIsExpense} />
   </Container>
  );
}

export default App;

var initialEntries = [
  {
    id:1,
    description:'Work income',
    value:10000,
    isExpense:false,
  },
  {
    id:2,
    description:'Water Bill',
    value:83,
    isExpense:true,
  },
  {
    id:3,
    description:'Rent',
    value:2000,
    isExpense:true,
  },
  {
    id:4,
    description:'Gas and power rent',
    value:200,
    isExpense:true,
  }
]
