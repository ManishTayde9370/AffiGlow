const permissions= {
    admin:[
        'user:create',
        'user:delete',
        'user:update',
        'user:read',
        'link:create',
        'link:delete',
        'link:update',
        'link:read',
        'payment:create',
    ],
    developer:[
        'link:read',
        'link:update',
        'link:delete',
        'payment:create'
    ],
    viewer:[
        'link:read',
        'link:update',
        'link:delete',
        'user:read',
        'payment:create'
    ]
}

module.exports=permissions;