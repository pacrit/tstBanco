import "./telaInicial.css"
import { useState } from "react";
import { NavLink } from 'react-router-dom'

import {
  GridColumn,
  FormInput,
  Button,
  Divider,
  Form,
  Grid,
  Segment,
} from "semantic-ui-react";

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

export default function TelaInicio() {

  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")

  const url = "http://localhost:3000/users"

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const dataUser = {
      user,
      password
    }

    const res = fetch(url, {
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dataUser)
    })
 
  }

  return (
    <div id="App">
      <div style={{ marginTop: "3em" }}>
        <h1 style={{ padding: "1em" }}>Nome do app</h1>
      </div>
      <div style={{ padding: "2em" }}>
        <div
          style={{
            padding: "2em",
            borderRadius: "10px",
            backgroundColor: "#DAFEB7",
          }}
        >
          <Segment>
            <Form onSubmit={handleSubmit}>
              <FormInput
                size="small"
                icon="user"
                iconPosition="left"
                label="Nome da sala"
                placeholder="Nome"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
              <FormInput
                size="small"
                icon="lock"
                iconPosition="left"
                label="Senha"
                type="password"
                placeholder="Insira sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button onClick={handleSubmit} color="olive" content="Entrar" />
            </Form>
            <Divider horizontal>Ou</Divider>
            <NavLink to="/register">
            <Button
              basic
              color="olive"
              content="Criar usuario"
              icon="signup"
              size="big"
              
            />
            </NavLink>
          </Segment>
        </div>
      </div>
    </div>
  );
}
