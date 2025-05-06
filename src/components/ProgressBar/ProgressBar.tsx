// compute percent:
const totalMs = new Date(targetDate).getTime() - startDate.getTime();
const elapsedMs = Date.now() - startDate.getTime();
const percent = Math.min(Math.floor((elapsedMs / totalMs) * 100), 100);

// in JSX
<div className="progress my-3">
  <div
    className="progress-bar"
    role="progressbar"
    style={{ width: `${percent}%` }}
    aria-valuenow={percent}
    aria-valuemin={0}
    aria-valuemax={100}
  >
    {percent}%
  </div>
</div>;
