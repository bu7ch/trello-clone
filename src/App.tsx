import React from 'react'

import { AddNewItem } from './components/AddNewItem';
import { Card } from './components/Card';
import { Column } from './components/Column';
import { AppContainer } from './styles';


 const App = () => {
  return (
    <AppContainer>
      <Column text="To Do">
        <Card text="Faire un composant"/>
      </Column>
      <Column text="In Progress">
        <Card text="Learn Typescript"/>
      </Column>
      <Column text="Done">
        <Card text="Almost finish my tasks"/>
      </Column>
      <AddNewItem toggleButtonText="+ Ajouter une liste" onAdd={console.log} />
    </AppContainer>
  )
}

export default App

