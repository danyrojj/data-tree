import icons from "./assets/index.js";

export const asyncMock = [
  { img: icons.users, id: "users", label: "Users", hasChildren: true },
  { img: icons.system, id: "system", label: "System" },
];

export const childrenMapFs = {
  users: [
    { img: icons.user, id: "johny", label: "Johny", hasChildren: true },
    { img: icons.user, id: "guest", label: "Guest", hasChildren: true },
  ],
  johny: [
    { img: icons.file, id: "passwords", label: "passwords.txt" },
    { img: icons.file, id: "hey", label: "hey.txt" },
    {
      img: icons.folder,
      id: "secret",
      label: "boring staff",
      hasChildren: true,
    },
    {
      img: icons.folder,
      id: "workspaces",
      label: "Workspaces",
      hasChildren: true,
    },
  ],
  workspaces: [
    {
      img: icons.folder,
      id: "reactApp",
      label: "MyReactApp",
      hasChildren: true,
    },
  ],
  reactApp: [{ id: "index", label: "index.js", img: icons.js }],
  guest: [
    { img: icons.folder, id: "library", label: "Library", hasChildren: true },
  ],
  library: [{ img: icons.picture, id: "userpic", label: "userpic" }],
  secret: [
    {
      img: icons.folder,
      id: "newFolder",
      label: "New Folder",
      hasChildren: true,
    },
  ],
  newFolder: [{ img: icons.mp4, id: "unknown", label: "Unknown.mp4" }],
};

export const speciesHierarchy = [
  {
    id: "life",
    label: "Life",
   
    children: [
      {
        id: "bacteria",
        label: "Bacteria",
       
        children: [
          { id: "proteobacteria", label: "Proteobacteria"},
          { id: "actinobacteria", label: "Actinobacteria"},
          { id: "firmicutes", label: "Firmicutes" },
        ],
      },
      {
        id: "archaea",
        label: "Archaea",
       
        children: [
          {
            id: "euryarchaeota",
            label: "Euryarchaeota",
           
          },
          {
            id: "crenarchaeota",
            label: "Crenarchaeota",
           
          },
        ],
      },
      {
        id: "eukaryotes",
        label: "Eukaryotes",
       
        children: [
          {
            id: "animals",
            label: "Animals",
           
            children: [
              {
                id: "vertebrates",
                label: "Vertebrates",
               
                children: [
                  {
                    id: "mammals",
                    label: "Mammals",
                   
                    children: [
                      {
                        id: "primates",
                        label: "Primates",
                       
                        children: [
                          {
                            id: "hominidae",
                            label: "Hominidae",
                           
                            children: [
                              {
                                id: "homo",
                                label: "Homo",
                               
                                children: [
                                  {
                                    id: "homo-sapiens",
                                    label: "Homo sapiens",
                                   
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        id: "carnivores",
                        label: "Carnivores",
                       
                        children: [
                          {
                            id: "felidae",
                            label: "Felidae",
                           
                            children: [
                              {
                                id: "panthera",
                                label: "Panthera",
                               
                                children: [
                                  {
                                    id: "panthera-tigris",
                                    label: "Panthera tigris",
                                   
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        id: "rodents",
                        label: "Rodents",
                       
                        children: [
                          {
                            id: "sciuridae",
                            label: "Sciuridae",
                           
                            children: [
                              {
                                id: "squirrel",
                                label: "Squirrel",
                               
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "insects",
                    label: "Insects",
                   
                    children: [
                      {
                        id: "beetles",
                        label: "Beetles",
                       
                        children: [
                          {
                            id: "ladybugs",
                            label: "Ladybugs",
                           
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "cnidarians",
                    label: "Cnidarians",
                   
                    children: [
                      {
                        id: "jellyfish",
                        label: "Jellyfish",
                       
                      },
                    ],
                  },
                  {
                    id: "mollusks",
                    label: "Mollusks",
                   
                    children: [
                      {
                        id: "snails",
                        label: "Snails",
                       
                      },
                    ],
                  },
                ],
              },
              {
                id: "plants",
                label: "Plants",
               
                children: [
                  {
                    id: "ferns",
                    label: "Ferns",
                   
                  },
                  {
                    id: "conifers",
                    label: "Conifers",
                   
                    children: [
                      {
                        id: "pines",
                        label: "Pines",
                       
                      },
                    ],
                  },
                  {
                    id: "flowering-plants",
                    label: "Flowering Plants",
                   
                    children: [
                      {
                        id: "rosids",
                        label: "Rosids",
                       
                        children: [
                          {
                            id: "rosales",
                            label: "Rosales",
                           
                            children: [
                              {
                                id: "rosaceae",
                                label: "Rosaceae",
                               
                                children: [
                                  {
                                    id: "apples",
                                    label: "Apples",
                                   
                                  },
                                  {
                                    id: "pears",
                                    label: "Pears",
                                   
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            id: "fabids",
                            label: "Fabids",
                           
                            children: [
                              {
                                id: "peanuts",
                                label: "Peanuts",
                               
                              },
                              {
                                id: "soybeans",
                                label: "Soybeans",
                               
                              },
                            ],
                          },
                        ],
                      },
                      {
                        id: "asters",
                        label: "Asters",
                       
                        children: [
                          {
                            id: "daisies",
                            label: "Daisies",
                           
                          },
                          {
                            id: "sunflowers",
                            label: "Sunflowers",
                           
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
