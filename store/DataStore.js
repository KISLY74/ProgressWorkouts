import { makeAutoObservable } from "mobx";

export default class DataStore {
  constructor() {
    this._isFormatting = false
    this._completeExercises = []
    makeAutoObservable(this)
  }
  setIsFormatting(bool) {
    this._isFormatting = bool
  }
  setCompleteExercises(el) {
    this._completeExercises.push(el)
  }
  clearCompleteExercises() {
    this._completeExercises = []
  }
  get isFormatting() {
    return this._isFormatting
  }
  get completeExercises() {
    return this._completeExercises
  }
}