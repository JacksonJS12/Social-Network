using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Social_Network.Data
{
    public class SocialNetworkDbContext : IdentityDbContext
    {
        public SocialNetworkDbContext(DbContextOptions<SocialNetworkDbContext> options)
            : base(options)
        {
        }
    }
}