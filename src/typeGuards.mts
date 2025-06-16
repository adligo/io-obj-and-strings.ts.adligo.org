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
    if (error == undefined || error == null || (typeof error == 'number')) {
      return false;
    } else if ((error as Error).cause != undefined) {
      return true;
    }
    return false;
  }
  public static hasName(error: any): boolean {
    if (error == undefined || error == null || (typeof error == 'number')) {
      return false;
    } else if ((error as Error).name != undefined) {
      return true;
    }
    return false;
  }
  public static hasMessage(error: any): boolean {
    if (error == undefined || error == null || (typeof error == 'number')) {
      return false;
    } else if ((error as Error).message != undefined) {
      return true;
    }
    return false;
  }
}

export class Maps {
  public static isMap(o: any): boolean {
    if (o == undefined || o == null || (typeof o == 'number')) {
      return false;
    } else if ((o as Map<any, any>).set == undefined) {
      return false;
    } else if ((o as Map<any, any>).get == undefined) {
      return false;
    } else if ((o as Map<any, any>).has == undefined) {
      return false;
    } else if ((o as Map<any, any>).delete == undefined) {
      return false;
    } else if ((o as Map<any, any>).clear == undefined) {
      return false;
    } else if ((o as Map<any, any>).size == undefined) {
      return false;
    } else if ((o as Map<any, any>).forEach == undefined) {
      return false;
    } else if ((o as Map<any, any>).keys == undefined) {
      return false;
    } else if ((o as Map<any, any>).values == undefined) {
      return false;
    } else if ((o as Map<any, any>).entries == undefined) {
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
    if (o == undefined || o == null || (typeof o == 'number')) {
      return false;
    } else if ((o as I_Classifiable).getClass != undefined) {
      return true;
    }
    return false;
  }
  public static isEquatable(o: any): boolean {
    if (o == undefined || o == null || (typeof o == 'number')) {
      return false;
    } else if ((o as I_Equatable).equals != undefined) {
      return true;
    }
    return false;
  };
  public static isHashable(o: any): boolean {
    if (o == undefined || o == null || (typeof o == 'number')) {
      return false;
    } else if ((o as I_Hashable).hashCode != undefined) {
      return true;
    }
    return false;
  };
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
    if (o == undefined || o == null || (typeof o == 'number')) {
      return false;
    } else
      if ((o as I_String).hasToStringOverride != undefined) {
        if ((o as I_String).toString != undefined) {
          return true;
        }
      }
    return false;
  }

  public static isNamed(o: any): boolean {
    if (o == undefined || o == null || (typeof o == 'number')) {
      return false;
    } else
      if ((o as I_Named).getName != undefined) {
        return true;
      }
    return false;
  };
}


