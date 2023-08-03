import React, { useState, useEffect } from "react";
import GoalHeader from "../components/GoalHeader";
import goals from "../data/goals";
import Goal from "../components/Goal";
import Loading from "../components/Loading"
import { useFetch } from "../../Hooks/useFetch";
// const Allgoals = () => {
//   const [Goals, setGoals] = useState([]);
//   const [isloading, setIsloading] = useState(true)
// const getGoals = async () => {
//   try {
//     const res = await fetch ('http://localhost:8000/api/goals')
//     const data = await res.json()
//     setIsloading(false)
//     setGoals(data.goals)
//   } catch (error) {
//     console.log(error);
//   }
// }
// useEffect(() => {
//   getGoals()
// }, [])
const Allgoals = () => {
  const {
    isloading,
    data: {goals: Goals},
  } = useFetch('https://richflows-unique-goal.onrender.com/api/goals');

// loading State
// empty goal
  return (
    <div className="container pb-3">
      <GoalHeader heading="All Goals" />
      {isloading && <Loading />}
      <div>
        <div>
          {Goals &&
          Goals.map((g) => {
            return <Goal key={g._id} {...g} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Allgoals;
