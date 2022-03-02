import React, { Fragment } from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import axios from "axios";

const HomePage = () => {
  const { data } = useQuery("data", () => {
    const url = "https://fakestoreapi.com/products";
    const res = axios.get(url);
    return res;
  });
  console.log(data);

  return (
    <Container>
      <Wrapper>
        {data?.data.map(
          ({ title, description, category, image, price, _id }, i) => (
            <>
              <Card key={_id}>
                <MusicName>{title}</MusicName>
                <ArtisteImage src={image} />
                <Time>time</Time>
                <Description>{description}</Description>
                <ArtisteHolder>
                  <ArtisteName>{category}</ArtisteName>
                  <Price>{price}</Price>
                </ArtisteHolder>
                <ButtonHolder>
                  <Button bg>Edit</Button>
                  <Button>Delete</Button>
                </ButtonHolder>
              </Card>
            </>
          )
        )}
      </Wrapper>
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 0px);
  background: lightgray;
`;

const Wrapper = styled.div`
  padding-top: 150px;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

const MusicName = styled.div`
  margin-top: 10px;
`;

const ArtisteImage = styled.img`
  height: 150px;
  margin-top: 10px;
  width: 250px;
  border-radius: 5px;
  object-fit: cover;
`;

const Time = styled.div`
  margin-top: 10px;
`;

const ArtisteHolder = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  width: 100%;
`;

const ArtisteName = styled.div``;

const Price = styled.div``;

const ButtonHolder = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
`;

const Button = styled.div`
  padding: 15px 20px;
  border-radius: 3px;
  color: white;
  cursor: pointer;
  font-weight: bold;
  background-color: ${({ bg }) => (bg ? "#004080" : "red")};
`;

const Description = styled.div`
  margin-top: 10px;
`;
const Card = styled.div`
  margin: 10px;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  width: 300px;
  min-height: 150px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;
