import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export default function MinOrderRadio(props: {
  onSetMinOrder: (minOrderPrice: number) => void;
  orderPrice: number;
}) {
  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="all"
        name="radio-buttons-group"
      >
        <FormControlLabel
          value="0"
          control={
            <Radio
              color="secondary"
              checked={props.orderPrice == 0 ? true : false}
            />
          }
          label="Show all"
          componentsProps={{
            typography: { color: "secondary", fontWeight: "bold" },
          }}
          onChange={() => props.onSetMinOrder(0)}
        />
        <FormControlLabel
          value="15"
          control={
            <Radio
              color="secondary"
              checked={props.orderPrice == 15 ? true : false}
            />
          }
          label="15$ or less"
          componentsProps={{
            typography: { color: "secondary", fontWeight: "bold" },
          }}
          onChange={() => props.onSetMinOrder(15)}
        />
        <FormControlLabel
          value="30"
          control={
            <Radio
              color="secondary"
              checked={props.orderPrice == 30 ? true : false}
            />
          }
          label="30$ or less"
          componentsProps={{
            typography: {
              color: "secondary",
              fontWeight: "bold",
            },
          }}
          onChange={() => props.onSetMinOrder(30)}
        />
      </RadioGroup>
    </FormControl>
  );
}
