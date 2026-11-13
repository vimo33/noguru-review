// One read of the published record, shared by the film and the site below it.
import {loadEvidence} from './pilot/data.js';
export const record = loadEvidence();
export const reloadRecord = () => loadEvidence();
