import adapter from '@sveltejs/adapter-static';

export default {
    kit: {
        
        adapter: adapter({
            // default options are shown. On some platforms
            // these options are set automatically — see below
            pages: 'svelte-build',
            assets: 'svelte-build',
            fallback: '404.html',
            precompress: false,
            strict: true
        })
    }
};
