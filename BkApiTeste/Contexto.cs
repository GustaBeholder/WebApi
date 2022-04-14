using Microsoft.EntityFrameworkCore;

namespace CrudBK.Models
{

    public class Contexto : DbContext
    {

        public Contexto(DbContextOptions<Contexto> options):base(options)
        {

        }

        public DbSet<Produto> Produto { get; set; }
        public DbSet<Usuario> Usuario { get; set; }
        public DbSet<Fornecedor> Fornecedor { get; set; }


    }
}
