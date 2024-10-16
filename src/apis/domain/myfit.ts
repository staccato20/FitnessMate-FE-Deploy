import { instance } from "@apis/instance"

import {
  MyRoutines,
  MyWorkoutIndex,
  MyWorkoutList,
  MyfitList,
} from "../../types/type"

const myFit = () => instance.get<MyfitList>("/api/myfit/userInfo")

const myRoutines = () => instance.get<MyRoutines>("/api/myfit/routines/workout")

const modifyMyRoutine = async (params: MyRoutines) => {
  const { data } = await instance.post(`/api/myfit/routines/workout/`, params)
  return data
}

const myWorkouts = async (routineId: number) => {
  const { data } = await instance.get<MyWorkoutList[]>(
    `/api/myfit/routines/workout/${routineId}`,
  )
  return data
}

const modifyMyWorkout = async (myWorkoutId: number, params: MyWorkoutIndex) => {
  const { data } = await instance.post(
    `/api/myfit/routines/workout/update/${myWorkoutId}`,
    params,
  )
  return data
}

const deleteMyWorkout = async (myWorkoutId: number) => {
  await instance.get(`/myfit/routines/workout/delete/${myWorkoutId}`)
}

const MyFitAPI = {
  myFit,
  myRoutines,
  modifyMyRoutine,
  modifyMyWorkout,
  myWorkouts,
  deleteMyWorkout,
}
export default MyFitAPI
