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

import { I_String, I_Named }  from '@ts.adligo.org/i_strings/dist/i_strings.mjs';
import { I_Classifiable, I_Equatable, I_Hashable }  from '@ts.adligo.org/i_obj/dist/i_obj.mjs';
/**
 * Obj is inspired by Java Object class, but the interfaces are extracted and
 * testable with these static methods.
 */
export class Obj {
  public static isClassifiable(o: any): boolean {
    if ((o as I_Classifiable).getClass != undefined) {
      return true;
    }
    return false;
  }
  public static isEquatable(o: any): boolean {
    if ((o as I_Equatable).equals != undefined) {
      return true;
    }
    return false;
  };
  public static isHashable(o: any): boolean {
    if ((o as I_Hashable).hashCode != undefined) {
      return true;
    }
    return false;
  };
}

export class Strings {
    public static isString(o: any): boolean {
        if ((o as I_String).toString != undefined) {
            return true;
        }
        return false;
    }
    public static isNamed(o: any): boolean {
        if ((o as I_Named).getName != undefined) {
            return true;
        }
        return false;
    };
}
