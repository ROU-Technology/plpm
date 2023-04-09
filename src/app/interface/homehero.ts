export interface HeroInterface {
  data: [
    {
      id: number;
      attributes: AttributesInterface;
    }
  ];
}

export interface Hero {
  id: number;
  attributes: AttributesInterface;
}
export interface AttributesInterface {
  title: string;
  videoId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

const data = {
  data: [
    {
      id: 3,
      attributes: {
        title: 'GIVING: Giving to your Parent',
        boldWord:
          ' A word from God will liberate your world come and get your word from God',
        videoId: 'cvs1pr4VU_U',
        createdAt: '2023-01-20T10:34:47.038Z',
        updatedAt: '2023-01-20T10:34:49.021Z',
        publishedAt: '2023-01-20T10:34:49.019Z',
      },
    },
    {
      id: 4,
      attributes: {
        title: 'GIVING: Giving Tithe and Offering',
        boldWord:
          ' A word from God will liberate your world come and get your word from God',
        videoId: 'jP3qAvnmpZk',
        createdAt: '2023-01-20T10:36:12.951Z',
        updatedAt: '2023-01-20T10:36:14.612Z',
        publishedAt: '2023-01-20T10:36:14.609Z',
      },
    },
    {
      id: 1,
      attributes: {
        title: 'GIVING: Giving to yourself',
        boldWord:
          ' A word from God will liberate your world come and get your word from God',
        videoId: 'UKCPw3FcOpY',
        createdAt: '2023-01-20T10:31:35.506Z',
        updatedAt: '2023-01-20T10:36:36.746Z',
        publishedAt: '2023-01-20T10:31:45.707Z',
      },
    },
    {
      id: 2,
      attributes: {
        title: "GIVING: Giving to God's work",
        boldWord:
          ' A word from God will liberate your world come and get your word from God',
        videoId: 'HcDS-3IAK3M',
        createdAt: '2023-01-20T10:33:41.689Z',
        updatedAt: '2023-01-20T10:36:55.954Z',
        publishedAt: '2023-01-20T10:33:43.706Z',
      },
    },
  ],
  meta: { pagination: { page: 1, pageSize: 25, pageCount: 1, total: 4 } },
};
