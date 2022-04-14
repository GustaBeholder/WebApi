using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CrudBK.Models
{

    [Table("Fornecedor")]
    public class Fornecedor
    {

        [Column("Id")]
        [Display(Name = "cód")]
        public int Id { get; set; }

        [Column("Nome")]
        [Display(Name = "Nome")]
        public string Nome { get; set; }

        [Column("Cnpj")]
        [Display(Name = "Cnpj")]
        public string Cnpj { get; set; }

        [Column("DataCadastro")]
        [Display(Name = "Data de Cadastro")]
        public DateTime DataCadastro { get; set; }

    }
}
