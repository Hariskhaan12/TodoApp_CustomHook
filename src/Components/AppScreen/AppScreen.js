import React, { useState, useEffect } from "react";
import TodoHook from "../../Hooks/TodoHook";
import Button from "../Button/Button";
import Input from "../Input/Input";
import List from "../List/List";
import "./AppScreen.css";
function AppScreen() {
  const [add, del, Alltodos, setCurrValue, CurrValue, DeleteAll] = TodoHook();

  let InputOnChange = (val) => {
    // console.log(val);
    setCurrValue(val);
  };

  let btnstle = {
    padding: "6px",
    float: "right",
    backgroundColor: " lightgreen",
    border: "none",
    borderRadius: "2px",
    fontWeight: "bolder",
    marginRight:"12px",
  };

  let inputstle = {
    marginRight:"5rem",
    outline: "none",
    border: "none",
    borderBottom: "1px solid",
    width: "45%",
    marginTop: "3%",
    marginBottom: "10px",
  };
  let delteAllbtnstle = {
    padding: "6px",
    backgroundColor: "red",
    border: "none",
    borderRadius: "2px",
    fontWeight: "bolder",
  };

  useEffect(() => {
    console.log("Use effect is running");
    localStorage.setItem("todos", JSON.stringify(Alltodos));
  }, [Alltodos]);

  return (
    <div className="main">
      <Input
        typ={"text"}
        plchl={"Enter Your Todo"}
        onchng={InputOnChange}
        val={CurrValue}
        stle={inputstle}
      />
      <div className="btns">
        <Button txt={"Add"} func={() => add(CurrValue)} stle={btnstle} />
        <Button txt={"DeleteAll"} func={DeleteAll} stle={delteAllbtnstle} />
      </div>
      <List todoList={Alltodos} delTodo={del} />
    </div>
  );
}

export default AppScreen;
