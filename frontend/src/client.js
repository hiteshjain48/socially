import { SanityClient } from "@sanity/client";
import { ImageUrlBuilder } from "@sanity/image-url";

export const client = new SanityClient({
    projectId: 'epivfmri',
    dataset: 'production',
    apiVersion: '2023-10-11',
    useCdn: true,
    token: 'skbnIlG0zl0468gfLvJOKLRzI467x5u4xaauMASX4AJG8OWacgcQE6LNHp42gvcugbGUMthhtQSW4ddaTcEnfIriGgvtC8KuOz4ze9kY8YgQCIYfAdnIIJhGWcQ1H7xLqOPRCjHP6a8AA8tNWKMot5J2QSFf3qWkiPK3JJGD65Xz0gaPjtZY'
})

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);