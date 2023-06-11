import React from "react";

interface ButtonProps {
  buttonLabel: string;
}

export const Button = ({ buttonLabel }: ButtonProps) => {
  return (
    <button type="submit" className="btn btn-primary self-end mb-3">
      {buttonLabel}
    </button>
  );
};
