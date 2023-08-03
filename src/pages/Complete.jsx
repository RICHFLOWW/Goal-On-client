import React, { useState,useEffect } from "react";
import goals from "../data/goals";
import Completed from "../components/Completed";
import GoalHeader from "../components/GoalHeader";
import Loading from "../components/Loading"
import { useFetch } from "../../Hooks/useFetch";
const Complete = () => {
  // const [Goals, setGoals] = useState([goals]);
  // const [isLoading, setIsLoading] = useState(true);
  // const getGoals = async () => {
  //   try {
  //     const res = await fetch ('http://localhost:8000/api/goals')
  //     const data = await res.json()
  //     setIsLoading(false)
  //    const completeGoals = data.goals.filter((g) => g.progress === 100)
  //    console.log(completeGoals);
  //    setGoals(completeGoals);
     
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // useEffect(() => {
  //   getGoals()
  // }, [])
  const {
    isLoading,
    data: {goals},
  } = useFetch('https://richflows-unique-goal.onrender.com/api/goals')
  const Goals = isLoading ? [] : goals.filter((g) => g.progress === 100);
  return (
    <div className="container mt-2">
      <GoalHeader heading="Completed" />
      <div>
        {Goals.map((g) => {
          return <Completed key={g.id} {...g} />;
        })}
      </div>
    </div>
  );
};

export default Complete;
