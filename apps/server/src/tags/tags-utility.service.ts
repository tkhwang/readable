import { Injectable } from '@nestjs/common';
import { normalizeText } from 'normalize-text';

@Injectable()
export class TagsUtilityService {
  /**
   * Normalize tag for better inter-operability
   * (ex) react.js, React.js, react, React => all are normalized to 'react'
   *
   * @static
   * @param {string} tag
   * @return {string} normalizedTag
   * @memberof TagsUtilityService
   */
  public static normalizeTag(tag: string) {
    return normalizeText(this.preprocessTag(tag));
  }

  /**
   * Preprocess tag for better inter-operability
   *
   * @private
   * @static
   * @param {string} tag
   * @return {*}
   * @memberof TagsUtilityService
   */
  private static preprocessTag(tag: string) {
    // MEMO(Teddy): react.js -> react, node.js -> node
    if (tag.endsWith('.js')) {
      return tag.slice(0, -3);
    }
    return tag;
  }
}
