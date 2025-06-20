/**
 * Copyright 2025 Adligo Inc / Scott Morgan
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { I_String, I_Named } from '@ts.adligo.org/i_strings/dist/i_strings.mjs';
import { I_Classifiable, I_Equatable, I_Hashable } from '@ts.adligo.org/i_obj/dist/i_obj.mjs';


export class Errors {
  public static hasCause(error: any): boolean {
    if (isNil(error)) {
      return false;
    } else if (isNil((error as Error).cause)) {
      return false;
    }
    return true;
  }
  public static hasName(error: any): boolean {
    if (isNil(error)) {
      return false;
    } else if (isNil((error as Error).name)) {
      return false;
    }
    return true;
  }
  public static hasMessage(error: any): boolean {
    if (isNil(error)) {
      return false;
    } else if (isNil((error as Error).message )) {
      return false;
    }
    return true;
  }
  public static hasStack(error: any): boolean {
    if (isNil(error)) {
      return false;
    } else if (isNil((error as Error).stack)) {
      return false;
    }
    return true;
  }
  
  /** 
   * includes a check for the name only,
   * this is a rather weak way to do this so go field by field
   */
  public static isAError(error: any): boolean {
    if (isNil(error)) {
      return false;
    }
    if (error instanceof Error) {
      return true;
    }
    return false;
  }
}

/**
 * @deprecated use isNil, it does the same thing but it has a slightly clearer name
 * since this could be confused with just a null (and not a undefined) check.
 *
 * returns true if o is null or undefined
 * @param o
 */
export function isNull(o: any): boolean {
    if (o == null || o == undefined) {
        return true;
    }
    return false;
}

/**
 * returns true if o is null or undefined
 * @param o
 */
export function isNil(o: any): boolean {
  if (o == null || o == undefined) {
    return true;
  }
  return false;
}

export class Maps {
  public static isMap(o: any): boolean {
    if (o == undefined || o == null || (typeof o == 'number')) {
      return false;
    } else if (isNil((o as Map<any, any>).set)) {
      return false;
    } else if (isNil((o as Map<any, any>).get)) {
      return false;
    } else if (isNil((o as Map<any, any>).has)) {
      return false;
    } else if (isNil((o as Map<any, any>).delete)) {
      return false;
    } else if (isNil((o as Map<any, any>).clear)) {
      return false;
    } else if (isNil((o as Map<any, any>).size)) {
      return false;
    } else if (isNil((o as Map<any, any>).forEach)) {
      return false;
    } else if (isNil((o as Map<any, any>).keys)) {
      return false;
    } else if (isNil((o as Map<any, any>).values)) {
      return false;
    } else if (isNil((o as Map<any, any>).entries)) {
      return false;
    }
    return true;
  }
}
/**
 * Obj is inspired by Java Object class, but the interfaces are extracted and
 * testable with these static methods.
 */
export class Objs {
  public static isClassifiable(o: any): boolean {
    if (isNil(o)) {
      return false;
    } else if (typeof o === 'object') {
      if (isNil((o as I_Classifiable).getClass)) {
        return false;
      }
      return true;
    }
    return false;
  }
  /** 
   * This should work fine on regular old objects that have a equals method
   * in addition to typescript classes that implement I_Equatable
   */
  public static isEquatable(o: any): boolean {
    if (isNil(o)) {
      return false;
    } else if (typeof o === 'object') {
      if (isNil((o as I_Equatable).equals)) {
        return false;
      }
      return true;
    }
    return false;
  }
  public static isHashable(o: any): boolean {
    if (isNil(o)) {
      return false;
    } else if (typeof o === 'object') {
      if (isNil((o as I_Hashable).hashCode )) {
        return false;
      }
      return true;
    }
    return false;
  }
}

/**
 * Don't use sets until node will allow them on the CLI
 */
export class Sets {

  
  public static isSet(o: any): boolean {
    if (o == undefined || o == null || (typeof o == 'number')) {
      return false;
    } else if ((o as Set<any>).clear != undefined) {
      return false;
    } else if ((o as Set<any>).delete != undefined) {
      return false;
    } else if ((o as Set<any>).entries != undefined) {
      return false;
    } else if ((o as Set<any>).has != undefined) {
      return false;
    } else if ((o as Set<any>).size != undefined) {
      return false;
    }

    /*
    } else if ((o as Set<any>).union != undefined) {
    return false;
    } else if ((o as Set<any>).intersection != undefined) {
    return false;
    } else if ((o as Set<any>).difference != undefined) {
    return false;
    } else if ((o as Set<any>).symmetricDifference != undefined) {
    return false;
    } */
    return true;
  }
}

export class Strings {
  /**
   * it's isI_String vs isString since this is a slightly different thing
   * an anomaly from the other type guards.
   */
  public static isI_String(o: any): boolean {
    if (isNil(o) || (typeof o == 'number')) {
      return false;
    } else if (isNil((o as I_String).hasToStringOverride)) {
      return false;
    } else if (isNil((o as I_String).toString)) {
      return false;
    }
    return true;
  }

  public static isNamed(o: any): boolean {
    if (isNil(o) || (typeof o == 'number')) {
      return false;
    } else if (isNil((o as I_Named).getName)) {
      return false;
    }
    return true;
  };
}


