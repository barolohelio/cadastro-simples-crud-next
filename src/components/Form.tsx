import { useState } from "react";

import { Income } from "./Income";
import { Client } from "../core/Client";
import { Button } from "./Button";

interface FormProps {
  client: Client;
  clientOnChange?: (client: Client) => void;
  canceled?: () => void;
}

export function Form(props: FormProps){
  const id = props.client?.id ?? null
  const [name, setName] = useState(props.client?.name ?? '')
  const [age, setAge] = useState(props.client?.age ?? 0)

  return (
    <div>
      <div>
        {id ? (
          <Income 
            readOnly
            text="Código" 
            value={id} 
            className="mb-4"
          />
        ): false}
        <Income
          text="Nome"
          value={name}
          onChange={setName}
          className="mb-4"
        />
        
        <Income
          text="Idade"
          type="number"
          value={age}
          onChange={setAge}
        />
      <div className="flex justify-end mt-7">
          <Button 
            cor="blue"
            className="mr-2" 
            onClick={() => props.clientOnChange?.(new Client(name, +age, id))}
          >
            {id ? "Alterar" : "Salvar"}
          </Button>
          <Button onClick={props.canceled}>
            Cancelar
          </Button>
      </div>
      </div>
    </div>
  )
}