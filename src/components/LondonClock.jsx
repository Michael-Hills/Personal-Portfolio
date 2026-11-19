import { useEffect, useState } from 'react';

const format = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Europe/London',
  hour: '2-digit',
  minute: '2-digit',
  timeZoneName: 'short',
});

export default function LondonClock() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(id);
  }, []);

  return <time dateTime={now.toISOString()}>{format.format(now)}</time>;
}
