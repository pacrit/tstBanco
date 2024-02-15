import "../styles.css";
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
            <Form>
              <FormInput
                size="small"
                icon="user"
                iconPosition="left"
                label="Nome da sala"
                placeholder="Nome"
              />
              <FormInput
                size="small"
                icon="lock"
                iconPosition="left"
                label="Senha"
                type="password"
              />

              <Button color="olive" content="Criar sala" />
            </Form>
            <Divider horizontal>Ou</Divider>
            <Button
              basic
              color="olive"
              content="Entrar na sala"
              icon="signup"
              size="big"
            />
          </Segment>
        </div>
      </div>
    </div>
  );
}
