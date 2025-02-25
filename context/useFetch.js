import { useState, useEffect } from "react";

const useFetch = (CounterData, counterArr) => {
  const [values, setValues] = useState([]);

  useEffect(() => {
    if (CounterData && CounterData[counterArr]) {
      const timeoutIds = CounterData[counterArr].map((data, index) => {
        const innerTimeoutIds = data.body.map((item, innerIndex) => {
          return setTimeout(() => {
            setValues((prevValues) => {
              const newValues = [...prevValues];
              newValues[index * data.body.length + innerIndex] = item.num;
              return newValues;
            });
          }, innerIndex * 500);
        });

        return innerTimeoutIds;
      });

      return () => {
        timeoutIds.forEach((innerTimeoutIds) =>
          innerTimeoutIds.forEach((id) => clearTimeout(id))
        );
      };
    }
  }, []);

  return { values };
};

export default useFetch;
