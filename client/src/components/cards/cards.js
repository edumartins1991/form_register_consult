import React from "react";
import "./card.css";
import FormDialog from "../dialog/dialogForm";

export default function Card(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <FormDialog
        open={open}
        setOpen={setOpen}
        title={props.name}
        lastname={props.lastname}
        listCard={props.listCard}
        setListCard={props.setListCard}
        id={props.id}
      />
      <div className="card-container" onClick={() => setOpen(true)}>
        <p className="card-title">{props.name}</p>
        <p className="card-lastname">{props.lastname}</p>
        <p className="card-id">{props.id}</p>
      </div>
    </>
  );
}
