import React from "react";
import styled from "styled-components";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const createSchema = yup.object().shape({
    title: yup.string().required("This field must be filled"),
    category: yup.string().required("This field must be filled"),
    description: yup.string().required("This field must be filled"),
    Price: yup
      .number()
      .positive()
      .integer()
      .required("This field must be filled"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createSchema),
  });

  const mutate = useMutation((data) => {
    return axios.post("https://fakestoreapi.com/products", data);
  });

  const createSubmit = (data) => {
    console.log(data);

    mutate.mutate(data);
    navigate("/");
  };

  return (
    <Container>
      <Wrapper>
        <Card onSubmit={handleSubmit(createSubmit)}>
          <Content>
            <Label>title</Label>
            <Input placeholder="Enter Title" {...register("title")} />
            <LabelError>{errors.title?.message}</LabelError>
          </Content>
          <Content>
            <Label>Category</Label>
            <Input placeholder="Enter category" {...register("category")} />
            <LabelError>{errors.category?.message}</LabelError>
          </Content>
          <Content>
            <Label>Description</Label>
            <Input
              placeholder="Enter description"
              {...register("description")}
            />
            <LabelError>{errors.description?.message}</LabelError>
          </Content>
          <Content>
            <Label>Price</Label>
            <Input placeholder="Enter price" {...register("price")} />
            <LabelError>{errors.price?.message}</LabelError>
          </Content>
          <Buttons>
            <Button bg type="submit">
              Add to Database
            </Button>
          </Buttons>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default Create;

const Input = styled.input`
  outline: none;
  height: 40px;
  border: 1px solid lightgray;
  border-radius: 3px;
  padding-left: 15px;
`;
const Label = styled.label`
  font-weight: bold;
  font-size: 12px;
  margin-top: 20px;
`;
const LabelError = styled.label`
  font-weight: bold;
  font-size: 10px;
  color: red;
`;

const Button = styled.button`
  padding: 15px 20px;
  border-radius: 3px;
  background: ${({ bg }) => (bg ? "#004080" : "red")};
  color: white;
  font-weight: bold;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  color: #004080;
  font-weight: bold;
  text-transform: capitalize;
  flex-direction: column;
`;

const Card = styled.form`
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  width: 500px;
  min-height: 250px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
`;

const Wrapper = styled.div`
  padding-top: 150px;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 0px);
  background: lightgray;
`;
