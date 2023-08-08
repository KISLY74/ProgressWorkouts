import { makeAutoObservable } from "mobx";

export default class DataStore {
  constructor() {
    this._isFormatting = false
    this._completeExercises = []
    this._compositeEx = []
    this._activeMuscleGroup = 'Жим гантелей на скамье'
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
  clearCompositeEx() {
    this._compositeEx = []
  }
  setCompositeEx(el) {
    this._compositeEx.push(el)
  }
  setActiveMuslceGroup(group) {
    this._activeMuscleGroup = group
  }
  get activeMuscleGroup() {
    return this._activeMuscleGroup
  }
  get isFormatting() {
    return this._isFormatting
  }
  get completeExercises() {
    return this._completeExercises
  }
  get compositeEx() {
    return this._compositeEx
  }
}