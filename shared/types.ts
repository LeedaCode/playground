export interface IPlayground
{
    id?: number;
    slug?: string;
    name?: string;
    description?: string;
    contents?: string;
    author?: string;
    versionsCount?: number;
    starCount?: number;
    pixiVersion?: string;
    isPublic?: boolean;
    isFeatured?: boolean;
    isOfficial?: boolean;
    autoUpdate?: boolean;

    tags?: ITag[];
    externaljs?: IExternalJs[];
}

export interface IExternalJs
{
    id?: number;
    url?: string;
}

export interface ITag
{
    id?: number;
    name?: string;
}
