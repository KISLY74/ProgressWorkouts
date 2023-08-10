import { makeAutoObservable } from "mobx";

export default class DataStore {
  constructor() {
    this._isFormatting = {}
    this._completeExercises = []
    this._compositeEx = []
    this._activeMuscleGroup = 'Жим гантелей на скамье'
    this._selectedApproaches = {}
    makeAutoObservable(this)
  }
  setIsFormatting(exercise, bool) {
    this._isFormatting[exercise] = bool
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
  setSelectedApproaches(exercise, i) {
    if (!this._selectedApproaches[exercise])
      this._selectedApproaches[exercise] = []
    if (this._selectedApproaches[exercise].includes(i)) {
      this._selectedApproaches = this._selectedApproaches[exercise].filter(el => el !== i)
    } else {
      this._selectedApproaches[exercise] = [...this._selectedApproaches[exercise], i]
    }
  }
  clearSelectedApproaches() {
    this._selectedApproaches = {}
  }
  get selectedApproaches() {
    return this._selectedApproaches
  }
  get activeMuscleGroup() {
    return this._activeMuscleGroup
  }
  getIsFormatting(exercise) {
    return this._isFormatting[exercise]
  }
  get completeExercises() {
    return this._completeExercises
  }
  get compositeEx() {
    return this._compositeEx
  }
}