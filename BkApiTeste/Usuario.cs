using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CrudBK.Models
{

    [Table("Usuario")]
    public class Usuario
    {


        [Column("Id")]
        [Display(Name = "cód")]
        public int Id { get; set; }

        [Column("Nome")]
        [Display(Name = "Nome")]
        public string Nome { get; set; }

        [Column("Cpf")]
        [Display(Name = "Cpf")]
        public string Cpf { get; set; }

        [Column("Email")]
        [Display(Name = "Email")]
        public string Email { get; set; }

        [Column("Senha")]
        [Display(Name = "Senha")]
        public string Senha { get; set; }

        [Column("DataNasc")]
        [Display(Name = "Data de Nascimento")]
        public DateTime DataNasc { get; set; }
    }
}
