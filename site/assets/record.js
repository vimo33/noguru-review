(() => {
  const body = document.getElementById('record-body'); if (!body) return;
  const filter = document.getElementById('record-filter'), more = document.getElementById('record-more'), count = document.getElementById('record-count'), error = document.getElementById('record-error');
  let rows = [], limit = 20;
  function render() {
    const selected = rows.filter(r => filter.value === 'all' || (filter.value === 'negative' ? r.pct < 0 : r.pct > 0));
    body.replaceChildren();
    for (const row of selected.slice(0,limit)) {
      const tr = document.createElement('tr');
      for (const value of [row.opened_at.slice(0,10),row.closed_at.slice(0,10),row.n_rungs,(row.pct>=0?'+':'')+row.pct.toFixed(2)+'%']) { const td = document.createElement('td'); td.textContent = value; tr.append(td); }
      tr.lastChild.className = row.pct < 0 ? 'negative' : 'positive'; body.append(tr);
    }
    count.textContent = `${Math.min(limit,selected.length)} of ${selected.length.toLocaleString()} saved cycles shown`;
    more.hidden = limit >= selected.length;
    if (!selected.length) { const tr=document.createElement('tr'),td=document.createElement('td');td.colSpan=4;td.textContent='No cycles match this filter.';tr.append(td);body.append(tr); }
  }
  filter.addEventListener('change',()=>{limit=20;render();});more.addEventListener('click',()=>{limit+=20;render();});
  fetch('/noguru-review/assets/evidence/closed-cycles.json').then(r=>{if(!r.ok)throw Error('unavailable');return r.json();}).then(d=>{rows=d.rows;render();}).catch(()=>{error.textContent='The full saved table could not load. The latest rows above remain available; you can download the CSV or open the original public record.';more.hidden=true;filter.disabled=true;});
})();
