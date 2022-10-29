import { useState } from "react";

export function useTableOrForm(){
  const [visible, setVisible] = useState<"table" | "form">("table");

  const showTable = () => setVisible('table')
  const showForm = () => setVisible('table')
  
  return {
    formVisible: visible === 'form',
    tableVisible: visible === 'table',
    showTable,
    showForm,
  }
}