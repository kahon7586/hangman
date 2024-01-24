import { DependencyList, EffectCallback, useEffect, useRef } from "react";

useEffect


export function useUpdateEffect ( effect: EffectCallback, dependency?: DependencyList ): void {
  
  const firstRef = useRef(true)
  
  useEffect( () => {

    if(firstRef.current === true){
      firstRef.current = false
      return
    }
    
    effect()
  }, dependency)
}