import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from '@/app/app';
import { env } from '@/app/shared/utils';

const root = createRoot(document.getElementById('root')!);

root.render(env.isDev ? (
	<StrictMode>
		<App />
	</StrictMode>
) : (
	<App />
));
