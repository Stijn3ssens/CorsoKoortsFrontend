export class Article {
    id: number;
    title: string;
    content: string;
    organisationId: number;
    tabId: number;
    releasedate: Date;
    followReleasedate: Date;
    memberReleasedate: Date;

    constructor(id: number, title: string, content: string, releasedate: Date, followReleasedate: Date, memberReleasedate: Date)
    {
        this.id = id;
        this.title = title;
        this.content = content;
        this.releasedate = releasedate;
        this.followReleasedate = followReleasedate;
        this.memberReleasedate = memberReleasedate;
    }
}