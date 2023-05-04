/**
 * @name genID
 * @description gen identifier for record
 * @param {*} prefix prefix
 * @param {number} [maxSize] max length of ID
 */
import { Repository } from "typeorm";
import { padStart } from "lodash";

export function genID(prefix, maxSize = 45){
  if (prefix) {
    maxSize = maxSize - prefix.length - 1;
  }
  let current_time = new Date().getTime();
  let rand = Math.floor(Math.random() * (Math.floor(Math.random() * 1000) - Math.floor(Math.random() * 100) + 600) + Math.floor(Math.random() * 100));
  let s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" + (current_time * rand);
  let result;

  let str = Array(maxSize).join().split(',').map(function () { return s.charAt(Math.floor(Math.random() * s.length)); }).join('');
  if (!!prefix) {

    result = `${prefix.toLocaleUpperCase()}-${str}`;
  } else {
    result = `${str}`;
  }

  return result;
}

/**
 * @name genSequenceID
 * @description gen sequence Identifier for record
 */

export async function genSequenceID(repository: Repository<any>, alias: string, field: string, prefix: string, resultPadLength: number = 10) {
  let padChar = "00000000000000000000000000000000000000000000000000000000000000"
  try {
    let result = await repository.createQueryBuilder(alias)
      .select(`${alias}.${field}`)
      .orderBy(`${alias}.${field}`,"DESC")
      .limit(1)
      .getOne()
    if(!result) return `${prefix}${padStart("1",resultPadLength, padChar)}`

    let lastIndex = result[field]
    return genNewIndexID(prefix, resultPadLength, lastIndex)
  }catch(error){
    throw { error }
  }
}

/**
 * @name genNewIndexID
 * @inheritDoc genSequenceID
 * @description gen sequence Identifier Helper for record
 */

export function genNewIndexID(prefix: string, resultPadLength: number = 10, lastIndex: string){
  let padChar = "00000000000000000000000000000000000000000000000000000000000000"
  let indexNumber = Number(lastIndex.slice(prefix.length))
  return `${prefix}${padStart((indexNumber+1).toString(),resultPadLength, padChar)}`
}