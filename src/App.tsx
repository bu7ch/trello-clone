
import { AddNewItem } from './components/AddNewItem';
import { useAppState } from './components/AppStateContext';
import { Card } from './components/Card';
import { Column } from './components/Column';
import { AppContainer } from './styles';

const counterReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "increment":
      return {count : state.count +1}
    case "decrement":
      return {count : state.count -1}
    default:
      throw new Error()
  }
}

interface State {
  count: number;
}
interface Action {
  type: string;
}

 const App = () => {
   const { state } = useAppState()
  return (
    <AppContainer>
      { state.lists.map((list, i) => (
        <Column text={list.text} key={list.id} index={i}/>
      ))}
      <AddNewItem
      toggleButtonText="+ Ajouter une nouvelle liste"
      onAdd={console.log}
      />
    </AppContainer>
  )
}

export default App

