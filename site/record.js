// One read of the published record, shared by the hero and the site below it: the trade record, and the
// published completed-profit figure that the record page shows too, so every page states the same number.
import {loadEvidence} from './pilot/data.js';
import {FEEDS, getJSON, readHeadline} from './read/record.js';
import {withHeadline} from './home-record.js';

const read = async () => {
  const [ev, head] = await Promise.all([loadEvidence(), getJSON(FEEDS.headline).then(readHeadline).catch(() => null)]);
  return withHeadline(ev, head);
};
export const record = read();
export const reloadRecord = () => read();
