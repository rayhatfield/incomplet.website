import dateFormat from "date-format";


export const Scheduled = ({episode: {scheduled_for: date}}) => !date ? null : (
  <span>Episode Coming {dateFormat("yyyy-MM-dd", new Date(date))}</span>
);
