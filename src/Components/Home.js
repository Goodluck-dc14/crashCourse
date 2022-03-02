import React from "react";
import styled from "styled-components";
import { Button, Checkbox, TextField } from "@mui/material";

const Home = () => {
  const [state, setState] = React.useState(false);
  return (
    <Container>
      <Wrapper>
        <div>This is Home</div>
        <Checkbox
          color="secondary"
          checked
          value={state}
          onChange={() => {
            setState(!state);
          }}
        />
        <br />
        <Button
          variant="contained"
          color="primary"
          disabled={state}
          onClick={() => {
            console.log(state);
          }}
        >
          This is Test
        </Button>
        <br />
        <Button variant="contained" color="primary">
          Ndidi
        </Button>
        <TextField variant="standard" />
      </Wrapper>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  width: 100%;
  min-height: calc(100vh - 100px);
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
