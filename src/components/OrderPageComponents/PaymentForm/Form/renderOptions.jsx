import React from "react";

export const renderOptionMonths = Array(12)
  .fill(0)
  .map((item, index) => <option key = {index}
                                value = {`${index + 1}`.padStart(2, '0')}>{`${index + 1}`.padStart(2, '0')}</option>)

export const renderOptionYears = Array(10)
  .fill(new Date().getFullYear())
  .map((item, index) => <option key = {index} value = {`${item + index}`}>{`${item + index}`}</option>)